import re
import json

file_path = r'C:\Users\qsd\.gemini\antigravity-ide\brain\c2e1dc87-36ea-4733-b344-abba3d78444d\.system_generated\steps\3336\content.md'
with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

m = re.search(r'var ytInitialData\s*=\s*({.*?});</script>', text)
if not m:
    m = re.search(r'ytInitialData\s*=\s*({.*?});', text)

if m:
    try:
        data = json.loads(m.group(1))
        # metadata
        meta = data.get('metadata', {}).get('playlistMetadataRenderer', {})
        print("PLAYLIST TITLE:", meta.get('title'))
        print("DESCRIPTION:", meta.get('description'))
        
        # Look for playlistVideoRenderer
        videos = []
        def find_videos(obj):
            if isinstance(obj, dict):
                if 'playlistVideoRenderer' in obj:
                    vr = obj['playlistVideoRenderer']
                    title = vr.get('title', {}).get('runs', [{}])[0].get('text', '')
                    length = vr.get('lengthText', {}).get('simpleText', '')
                    videos.append((title, length))
                for v in obj.values():
                    find_videos(v)
            elif isinstance(obj, list):
                for item in obj:
                    find_videos(item)

        find_videos(data)
        print(f"Total videos found: {len(videos)}")
        for idx, (t, l) in enumerate(videos, 1):
            print(f"{idx}. {t} [{l}]")
    except Exception as e:
        print("JSON parse error:", e)
else:
    print("ytInitialData not found, using regex")
    titles = re.findall(r'"title":\{"runs":\[\{"text":"(.*?)"\}\]', text)
    print("Found titles:", len(titles))
    for t in titles[:30]:
        print("-", t)
