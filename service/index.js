// 服务 - 不需要维持状态却频繁使用的方法 and 必要的封装确保在底层依赖切换时表现足够一致 and install nodejs模块
import event from './initialization/event.js'
import record from './initialization/record.js'
import cache from './initialization/cache.js'
import moment from './initialization/moment.js'
import http from './initialization/http.js'
import load from './initialization/load.js'
import nav from './initialization/nav.js'
import qs from './initialization/qs.js'
import message from './initialization/message.js'
import validate from './initialization/validate.js'
export const Event = event;
export const Record = record;
export const Cache = cache;
export const Moment = moment;
export const Http = http;
export const Load = load;
export const Nav = nav;
export const Qs = qs;
export const Message = message;
export const Validate = validate;