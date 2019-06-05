/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaNotificationStatus } from './KalturaNotificationStatus';
import { KalturaNotificationObjectType } from './KalturaNotificationObjectType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaNotificationJobDataArgs() { }
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.userId;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.type;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.typeAsString;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.status;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.data;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.numberOfAttempts;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.notificationResult;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.objType;
var KalturaNotificationJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaNotificationJobData, _super);
    function KalturaNotificationJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaNotificationJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaNotificationJobData' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaNotificationType, subType: 'KalturaNotificationType' },
            typeAsString: { type: 's' },
            objectId: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaNotificationStatus, subType: 'KalturaNotificationStatus' },
            data: { type: 's' },
            numberOfAttempts: { type: 'n' },
            notificationResult: { type: 's' },
            objType: { type: 'en', subTypeConstructor: KalturaNotificationObjectType, subType: 'KalturaNotificationObjectType' }
        });
        return result;
    };
    return KalturaNotificationJobData;
}(KalturaJobData));
export { KalturaNotificationJobData };
if (false) {
    /** @type {?} */
    KalturaNotificationJobData.prototype.userId;
    /** @type {?} */
    KalturaNotificationJobData.prototype.type;
    /** @type {?} */
    KalturaNotificationJobData.prototype.typeAsString;
    /** @type {?} */
    KalturaNotificationJobData.prototype.objectId;
    /** @type {?} */
    KalturaNotificationJobData.prototype.status;
    /** @type {?} */
    KalturaNotificationJobData.prototype.data;
    /** @type {?} */
    KalturaNotificationJobData.prototype.numberOfAttempts;
    /** @type {?} */
    KalturaNotificationJobData.prototype.notificationResult;
    /** @type {?} */
    KalturaNotificationJobData.prototype.objType;
}
typesMappingStorage['KalturaNotificationJobData'] = KalturaNotificationJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFOb3RpZmljYXRpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRFLElBQUE7SUFBZ0Qsc0RBQWM7SUFZMUQsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ3pHLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMvRyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDL0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0F4REw7RUFvQmdELGNBQWMsRUFxQzdELENBQUE7QUFyQ0Qsc0NBcUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhTm90aWZpY2F0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTm90aWZpY2F0aW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhTm90aWZpY2F0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTm90aWZpY2F0aW9uT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgdXNlcklkPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZTtcblx0dHlwZUFzU3RyaW5nPyA6IHN0cmluZztcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYU5vdGlmaWNhdGlvblN0YXR1cztcblx0ZGF0YT8gOiBzdHJpbmc7XG5cdG51bWJlck9mQXR0ZW1wdHM/IDogbnVtYmVyO1xuXHRub3RpZmljYXRpb25SZXN1bHQ/IDogc3RyaW5nO1xuXHRvYmpUeXBlPyA6IEthbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHVzZXJJZCA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFOb3RpZmljYXRpb25UeXBlO1xuXHR0eXBlQXNTdHJpbmcgOiBzdHJpbmc7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhTm90aWZpY2F0aW9uU3RhdHVzO1xuXHRkYXRhIDogc3RyaW5nO1xuXHRudW1iZXJPZkF0dGVtcHRzIDogbnVtYmVyO1xuXHRub3RpZmljYXRpb25SZXN1bHQgOiBzdHJpbmc7XG5cdG9ialR5cGUgOiBLYWx0dXJhTm90aWZpY2F0aW9uT2JqZWN0VHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUnIH0sXG5cdFx0XHRcdHR5cGVBc1N0cmluZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTm90aWZpY2F0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFOb3RpZmljYXRpb25TdGF0dXMnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bnVtYmVyT2ZBdHRlbXB0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25SZXN1bHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YSddID0gS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGE7Il19