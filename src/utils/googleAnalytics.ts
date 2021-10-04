/* eslint-disable @typescript-eslint/ban-ts-comment */
interface GoogleAnalyticsData {
	defer?: boolean;
	productId?: string | number;
	pageType?: 'other' | 'server' | 'client';
	totalPrice?: string | number;
}

export const getGoogleAnalytics = async () => {
	let googleAnalyticsInstance = null;
	const maxRetry = 40;
	const interval = 300;

	for (let i = 0; i < maxRetry; i++) {
		try {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					//@ts-ignore
					if (window.ga) {
						//@ts-ignore
						googleAnalyticsInstance = window.ga;

						return resolve(null);
					}

					reject();
				}, interval);
			});
			break;
		} catch {
			/* Retry */
		}
	}

	return googleAnalyticsInstance;
};

export const sendPageView = async (data: GoogleAnalyticsData, url?: string) => {
	const googleAnalytics = await getGoogleAnalytics();
	//@ts-ignore
	googleAnalytics('set', 'dimension1', 'dimension 1 value');
	//@ts-ignore
	googleAnalytics('set', 'dimension2', `dimension 2 value`);
	//@ts-ignore
	googleAnalytics('set', 'dimension3', `dimension 3 value`);

	if (url) {
		//@ts-ignore
		googleAnalytics('send', 'pageview', url);
	} else {
		//@ts-ignore
		googleAnalytics('send', 'pageview', location.pathname);
	}
};

export const fireGoogleAnalyticEvent = ({
	eventCategory,
	eventAction,
	eventLabel = '',
	eventValue = 0,
}) => {
	const init = () => {
		ga('send', {
			hitType: 'event',
			eventCategory,
			eventAction,
			eventLabel: eventLabel || undefined,
			eventValue,
		});
	};

	const interval = setInterval(() => {
		if (window.ga) {
			init();
			clearInterval(interval);
		}
	}, 100);
};
