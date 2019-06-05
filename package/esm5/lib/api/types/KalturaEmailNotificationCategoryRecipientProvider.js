/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCategoryUserProviderFilter } from './KalturaCategoryUserProviderFilter';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
/**
 * @record
 */
export function KalturaEmailNotificationCategoryRecipientProviderArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationCategoryRecipientProviderArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaEmailNotificationCategoryRecipientProviderArgs.prototype.categoryIds;
/** @type {?|undefined} */
KalturaEmailNotificationCategoryRecipientProviderArgs.prototype.categoryUserFilter;
var KalturaEmailNotificationCategoryRecipientProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationCategoryRecipientProvider, _super);
    function KalturaEmailNotificationCategoryRecipientProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationCategoryRecipientProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationCategoryRecipientProvider' },
            categoryId: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' },
            categoryIds: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' },
            categoryUserFilter: { type: 'o', subTypeConstructor: KalturaCategoryUserProviderFilter, subType: 'KalturaCategoryUserProviderFilter' }
        });
        return result;
    };
    return KalturaEmailNotificationCategoryRecipientProvider;
}(KalturaEmailNotificationRecipientProvider));
export { KalturaEmailNotificationCategoryRecipientProvider };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationCategoryRecipientProvider.prototype.categoryId;
    /** @type {?} */
    KalturaEmailNotificationCategoryRecipientProvider.prototype.categoryIds;
    /** @type {?} */
    KalturaEmailNotificationCategoryRecipientProvider.prototype.categoryUserFilter;
}
typesMappingStorage['KalturaEmailNotificationCategoryRecipientProvider'] = KalturaEmailNotificationCategoryRecipientProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uQ2F0ZWdvcnlSZWNpcGllbnRQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uQ2F0ZWdvcnlSZWNpcGllbnRQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7O0FBU3ZKLElBQUE7SUFBdUUsNkVBQXlDO0lBTTVHLDJEQUFZLElBQTZEO2VBRXJFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbURBQW1ELEVBQUU7WUFDdEcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDcEcsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDckcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtTQUNqSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzREQXJDTDtFQWF1RSx5Q0FBeUMsRUF5Qi9HLENBQUE7QUF6QkQsNkRBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtREFBbUQsQ0FBQyxHQUFHLGlEQUFpRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmdWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYVN0cmluZ1ZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyLCBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25DYXRlZ29yeVJlY2lwaWVudFByb3ZpZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlckFyZ3Mge1xuICAgIGNhdGVnb3J5SWQ/IDogS2FsdHVyYVN0cmluZ1ZhbHVlO1xuXHRjYXRlZ29yeUlkcz8gOiBLYWx0dXJhU3RyaW5nVmFsdWU7XG5cdGNhdGVnb3J5VXNlckZpbHRlcj8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkNhdGVnb3J5UmVjaXBpZW50UHJvdmlkZXIgZXh0ZW5kcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciB7XG5cbiAgICBjYXRlZ29yeUlkIDogS2FsdHVyYVN0cmluZ1ZhbHVlO1xuXHRjYXRlZ29yeUlkcyA6IEthbHR1cmFTdHJpbmdWYWx1ZTtcblx0Y2F0ZWdvcnlVc2VyRmlsdGVyIDogS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25DYXRlZ29yeVJlY2lwaWVudFByb3ZpZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkNhdGVnb3J5UmVjaXBpZW50UHJvdmlkZXInIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmdWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nVmFsdWUnIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRzIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ1ZhbHVlJyB9LFxuXHRcdFx0XHRjYXRlZ29yeVVzZXJGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkNhdGVnb3J5UmVjaXBpZW50UHJvdmlkZXInXSA9IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkNhdGVnb3J5UmVjaXBpZW50UHJvdmlkZXI7Il19