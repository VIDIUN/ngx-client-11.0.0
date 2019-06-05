/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
/**
 * @record
 */
export function KalturaLocationScheduleResourceArgs() { }
var KalturaLocationScheduleResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLocationScheduleResource, _super);
    function KalturaLocationScheduleResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLocationScheduleResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLocationScheduleResource' }
        });
        return result;
    };
    return KalturaLocationScheduleResource;
}(KalturaScheduleResource));
export { KalturaLocationScheduleResource };
typesMappingStorage['KalturaLocationScheduleResource'] = KalturaLocationScheduleResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBT2pHLElBQUE7SUFBcUQsMkRBQXVCO0lBSXhFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E1Qkw7RUFTcUQsdUJBQXVCLEVBb0IzRSxDQUFBO0FBcEJELDJDQW9CQztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UsIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlJ10gPSBLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlOyJdfQ==