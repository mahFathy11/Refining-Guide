import zlib
import re

with open('C:/Users/qsd/.gemini/antigravity-ide/brain/c2e1dc87-36ea-4733-b344-abba3d78444d/.user_uploaded/media_1793394628740.pdf', 'rb') as f:
    data = f.read()

streams = re.findall(b'stream[\r\n]+(.*?)[\r\n]+endstream', data, re.DOTALL)
all_text = []
for s in streams:
    try:
        decomp = zlib.decompress(s)
        all_text.append(decomp)
    except Exception:
        pass

full = b' '.join(all_text)
urls = re.findall(rb'https?://[^\s()<>"\']+', full)
for u in sorted(set(urls)):
    print(u.decode('utf-8', errors='ignore'))
