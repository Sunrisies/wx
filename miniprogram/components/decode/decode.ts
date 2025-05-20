const config = require('./config');

Component({
	options: {
		styleIsolation: 'apply-shared'
	},
	properties: {
		nodes: {
			type: Object,
			value: {}
		}
	},
	lifetimes: {
		attached: function () {
			const _ts = this;
			console.log(config.events)
			config.events.forEach((item: string) => {
				_ts['_' + item] = function (...arg: any[]) {
					if ((global as any)._events && typeof (global as any)._events[item] === 'function') {
						(global as any)._events[item](...arg);
					}
				};
			});
		}
	}
})