/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate } from './KalturaBusinessProcessNotificationTemplate';
/**
 * @record
 */
export function KalturaBusinessProcessSignalNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessSignalNotificationTemplateArgs.prototype.message;
/** @type {?|undefined} */
KalturaBusinessProcessSignalNotificationTemplateArgs.prototype.eventId;
var KalturaBusinessProcessSignalNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessSignalNotificationTemplate, _super);
    function KalturaBusinessProcessSignalNotificationTemplate(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessSignalNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessSignalNotificationTemplate' },
            message: { type: 's' },
            eventId: { type: 's' }
        });
        return result;
    };
    return KalturaBusinessProcessSignalNotificationTemplate;
}(KalturaBusinessProcessNotificationTemplate));
export { KalturaBusinessProcessSignalNotificationTemplate };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessSignalNotificationTemplate.prototype.message;
    /** @type {?} */
    KalturaBusinessProcessSignalNotificationTemplate.prototype.eventId;
}
typesMappingStorage['KalturaBusinessProcessSignalNotificationTemplate'] = KalturaBusinessProcessSignalNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBDQUEwQyxFQUFrRCxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7QUFRMUosSUFBQTtJQUFzRSw0RUFBMEM7SUFLNUcsMERBQVksSUFBNEQ7ZUFFcEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrREFBa0QsRUFBRTtZQUNyRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJEQWhDTDtFQVVzRSwwQ0FBMEMsRUF1Qi9HLENBQUE7QUF2QkQsNERBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0RBQWtELENBQUMsR0FBRyxnREFBZ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUsIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIHtcbiAgICBtZXNzYWdlPyA6IHN0cmluZztcblx0ZXZlbnRJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTaWduYWxOb3RpZmljYXRpb25UZW1wbGF0ZSBleHRlbmRzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZSB7XG5cbiAgICBtZXNzYWdlIDogc3RyaW5nO1xuXHRldmVudElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHRtZXNzYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV2ZW50SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlJ10gPSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGU7Il19