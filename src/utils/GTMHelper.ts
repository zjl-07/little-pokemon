type eventData = {
	eventCategory: string;
	eventAction: string;
	eventLabel: string;
	eventValue?: number;
};

export const UACustomEvent = ({
	eventCategory,
	eventAction,
	eventLabel,
	eventValue = 0,
}: eventData): void => {
	function triggerEvent() {
		window.dataLayer.push({
			event: 'ga_events',
			eventCategory,
			eventAction,
			eventLabel,
			eventValue,
		});
	}

	if (window.dataLayer) triggerEvent();
	else {
		const intervalId = setInterval(() => {
			triggerEvent();
			clearInterval(intervalId);
		}, 100);
	}
};
