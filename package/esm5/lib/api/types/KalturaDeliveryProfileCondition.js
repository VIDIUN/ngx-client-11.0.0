/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaDeliveryProfileConditionArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileConditionArgs.prototype.deliveryProfileIds;
var KalturaDeliveryProfileCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileCondition, _super);
    function KalturaDeliveryProfileCondition(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.deliveryProfileIds === 'undefined')
            _this.deliveryProfileIds = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileCondition' },
            deliveryProfileIds: { type: 'a', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' }
        });
        return result;
    };
    return KalturaDeliveryProfileCondition;
}(KalturaCondition));
export { KalturaDeliveryProfileCondition };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileCondition.prototype.deliveryProfileIds;
}
typesMappingStorage['KalturaDeliveryProfileCondition'] = KalturaDeliveryProfileCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPNUUsSUFBQTtJQUFxRCwyREFBZ0I7SUFJakUseUNBQVksSUFBMkM7UUFBdkQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7O0tBQ3BGOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUNyRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQS9CTDtFQVVxRCxnQkFBZ0IsRUFzQnBFLENBQUE7QUF0QkQsMkNBc0JDOzs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUludGVnZXJWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbkFyZ3Mge1xuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcz8gOiBLYWx0dXJhSW50ZWdlclZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcyA6IEthbHR1cmFJbnRlZ2VyVmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5UHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZGVsaXZlcnlQcm9maWxlSWRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdlclZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ2VyVmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb24nXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb247Il19