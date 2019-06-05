/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaMailNotificationObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.mailTo;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.sender;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.subject;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.message;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.footer;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.link;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.sendToUsers;
export class KalturaMailNotificationObjectTask extends KalturaObjectTask {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMailNotificationObjectTask' },
            mailTo: { type: 's' },
            sender: { type: 's' },
            subject: { type: 's' },
            message: { type: 's' },
            footer: { type: 's' },
            link: { type: 's' },
            sendToUsers: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.mailTo;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.sender;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.subject;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.message;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.footer;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.link;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.sendToUsers;
}
typesMappingStorage['KalturaMailNotificationObjectTask'] = KalturaMailNotificationObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWFpbE5vdGlmaWNhdGlvbk9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0UsTUFBTSx3Q0FBeUMsU0FBUSxpQkFBaUI7Ozs7SUFVcEUsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIG1haWxUbz8gOiBzdHJpbmc7XG5cdHNlbmRlcj8gOiBzdHJpbmc7XG5cdHN1YmplY3Q/IDogc3RyaW5nO1xuXHRtZXNzYWdlPyA6IHN0cmluZztcblx0Zm9vdGVyPyA6IHN0cmluZztcblx0bGluaz8gOiBzdHJpbmc7XG5cdHNlbmRUb1VzZXJzPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNYWlsTm90aWZpY2F0aW9uT2JqZWN0VGFzayBleHRlbmRzIEthbHR1cmFPYmplY3RUYXNrIHtcblxuICAgIG1haWxUbyA6IHN0cmluZztcblx0c2VuZGVyIDogc3RyaW5nO1xuXHRzdWJqZWN0IDogc3RyaW5nO1xuXHRtZXNzYWdlIDogc3RyaW5nO1xuXHRmb290ZXIgOiBzdHJpbmc7XG5cdGxpbmsgOiBzdHJpbmc7XG5cdHNlbmRUb1VzZXJzIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNYWlsTm90aWZpY2F0aW9uT2JqZWN0VGFzaycgfSxcblx0XHRcdFx0bWFpbFRvIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlbmRlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdWJqZWN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lc3NhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9vdGVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VuZFRvVXNlcnMgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrJ10gPSBLYWx0dXJhTWFpbE5vdGlmaWNhdGlvbk9iamVjdFRhc2s7Il19