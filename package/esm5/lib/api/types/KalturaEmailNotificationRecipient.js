/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEmailNotificationRecipientArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationRecipientArgs.prototype.email;
/** @type {?|undefined} */
KalturaEmailNotificationRecipientArgs.prototype.name;
var KalturaEmailNotificationRecipient = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationRecipient, _super);
    function KalturaEmailNotificationRecipient(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationRecipient.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationRecipient' },
            email: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' },
            name: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    };
    return KalturaEmailNotificationRecipient;
}(KalturaObjectBase));
export { KalturaEmailNotificationRecipient };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationRecipient.prototype.email;
    /** @type {?} */
    KalturaEmailNotificationRecipient.prototype.name;
}
typesMappingStorage['KalturaEmailNotificationRecipient'] = KalturaEmailNotificationRecipient;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUF1RCw2REFBaUI7SUFLcEUsMkNBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQWpDTDtFQVd1RCxpQkFBaUIsRUF1QnZFLENBQUE7QUF2QkQsNkNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nVmFsdWUgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGVtYWlsPyA6IEthbHR1cmFTdHJpbmdWYWx1ZTtcblx0bmFtZT8gOiBLYWx0dXJhU3RyaW5nVmFsdWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGVtYWlsIDogS2FsdHVyYVN0cmluZ1ZhbHVlO1xuXHRuYW1lIDogS2FsdHVyYVN0cmluZ1ZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50JyB9LFxuXHRcdFx0XHRlbWFpbCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50J10gPSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnQ7Il19