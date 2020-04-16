---
title:			Security improvements
date:			2019-12-01 01:00:00 +0100
---
* Increase RSA keysize to 2048 bits for self-signed certificates (used by WebRTC)
* Generate a new WebRTC identity for each connection instead of reusing identities for 30 days
* Generate a new ECDHE keypair for each WebRTC connection instead of reusing them for multiple connections
* Disable using system-provided plugins (i.e. Java, Flash, etc.)