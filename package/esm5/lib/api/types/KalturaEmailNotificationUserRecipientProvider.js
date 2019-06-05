/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
/**
 * @record
 */
export function KalturaEmailNotificationUserRecipientProviderArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationUserRecipientProviderArgs.prototype.filter;
var KalturaEmailNotificationUserRecipientProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationUserRecipientProvider, _super);
    function KalturaEmailNotificationUserRecipientProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationUserRecipientProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationUserRecipientProvider' },
            filter: { type: 'o', subTypeConstructor: KalturaUserFilter, subType: 'KalturaUserFilter' }
        });
        return result;
    };
    return KalturaEmailNotificationUserRecipientProvider;
}(KalturaEmailNotificationRecipientProvider));
export { KalturaEmailNotificationUserRecipientProvider };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationUserRecipientProvider.prototype.filter;
}
typesMappingStorage['KalturaEmailNotificationUserRecipientProvider'] = KalturaEmailNotificationUserRecipientProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudFByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25Vc2VyUmVjaXBpZW50UHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlDQUF5QyxFQUFpRCxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7O0FBT3ZKLElBQUE7SUFBbUUseUVBQXlDO0lBSXhHLHVEQUFZLElBQXlEO2VBRWpFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDckYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REE5Qkw7RUFVbUUseUNBQXlDLEVBcUIzRyxDQUFBO0FBckJELHlEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhVXNlckZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudFByb3ZpZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlckFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhVXNlckZpbHRlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudFByb3ZpZGVyIGV4dGVuZHMgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXIge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYVVzZXJGaWx0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRQcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Vc2VyUmVjaXBpZW50UHJvdmlkZXInIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRQcm92aWRlciddID0gS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudFByb3ZpZGVyOyJdfQ==