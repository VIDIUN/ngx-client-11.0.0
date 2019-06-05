/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaDeliveryProfileConditionArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileConditionArgs.prototype.deliveryProfileIds;
export class KalturaDeliveryProfileCondition extends KalturaCondition {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.deliveryProfileIds === 'undefined')
            this.deliveryProfileIds = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileCondition' },
            deliveryProfileIds: { type: 'a', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileCondition.prototype.deliveryProfileIds;
}
typesMappingStorage['KalturaDeliveryProfileCondition'] = KalturaDeliveryProfileCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQU81RSxNQUFNLHNDQUF1QyxTQUFRLGdCQUFnQjs7OztJQUlqRSxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7S0FDcEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDckcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUludGVnZXJWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbkFyZ3Mge1xuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcz8gOiBLYWx0dXJhSW50ZWdlclZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcyA6IEthbHR1cmFJbnRlZ2VyVmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5UHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZGVsaXZlcnlQcm9maWxlSWRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdlclZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ2VyVmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb24nXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVDb25kaXRpb247Il19