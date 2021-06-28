#!/bin/sh
xg ()
{
	for url in "$@"; do
		if curl -s "$url" >.new; then
			mv -f .new "${url##*/}"
		fi
	done
}
cd /srv/www/cache.iridiumbrowser.de/
xg https://ssl.gstatic.com/safebrowsing/csd/client_model_v5.pb
xg https://ssl.gstatic.com/safebrowsing/csd/client_model_v5_variation_{0..10}.pb
xg https://ssl.gstatic.com/safebrowsing/csd/client_model_v5_ext_variation_{0..9}.pb
xg https://www.gstatic.com/chrome/config/plugins_2/plugins_{win,linux,mac}.json
cd plugins_3/
xg https://www.gstatic.com/chrome/config/plugins_3/plugins_{win,linux,mac}.json
