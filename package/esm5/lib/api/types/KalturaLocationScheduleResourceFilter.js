/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLocationScheduleResourceBaseFilter } from './KalturaLocationScheduleResourceBaseFilter';
/**
 * @record
 */
export function KalturaLocationScheduleResourceFilterArgs() { }
var KalturaLocationScheduleResourceFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLocationScheduleResourceFilter, _super);
    function KalturaLocationScheduleResourceFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLocationScheduleResourceFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLocationScheduleResourceFilter' }
        });
        return result;
    };
    return KalturaLocationScheduleResourceFilter;
}(KalturaLocationScheduleResourceBaseFilter));
export { KalturaLocationScheduleResourceFilter };
typesMappingStorage['KalturaLocationScheduleResourceFilter'] = KalturaLocationScheduleResourceFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBT3ZKLElBQUE7SUFBMkQsaUVBQXlDO0lBSWhHLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE1Qkw7RUFTMkQseUNBQXlDLEVBb0JuRyxDQUFBO0FBcEJELGlEQW9CQztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIsIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlRmlsdGVyJ10gPSBLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlRmlsdGVyOyJdfQ==