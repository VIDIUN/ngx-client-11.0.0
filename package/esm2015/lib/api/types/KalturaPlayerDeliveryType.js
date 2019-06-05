/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayerDeliveryTypeArgs() { }
/** @type {?|undefined} */
KalturaPlayerDeliveryTypeArgs.prototype.id;
/** @type {?|undefined} */
KalturaPlayerDeliveryTypeArgs.prototype.label;
/** @type {?|undefined} */
KalturaPlayerDeliveryTypeArgs.prototype.flashvars;
/** @type {?|undefined} */
KalturaPlayerDeliveryTypeArgs.prototype.minVersion;
/** @type {?|undefined} */
KalturaPlayerDeliveryTypeArgs.prototype.enabledByDefault;
export class KalturaPlayerDeliveryType extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.flashvars === 'undefined')
            this.flashvars = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayerDeliveryType' },
            id: { type: 's' },
            label: { type: 's' },
            flashvars: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            minVersion: { type: 's' },
            enabledByDefault: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayerDeliveryType.prototype.id;
    /** @type {?} */
    KalturaPlayerDeliveryType.prototype.label;
    /** @type {?} */
    KalturaPlayerDeliveryType.prototype.flashvars;
    /** @type {?} */
    KalturaPlayerDeliveryType.prototype.minVersion;
    /** @type {?} */
    KalturaPlayerDeliveryType.prototype.enabledByDefault;
}
typesMappingStorage['KalturaPlayerDeliveryType'] = KalturaPlayerDeliveryType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixNQUFNLGdDQUFpQyxTQUFRLGlCQUFpQjs7OztJQVE1RCxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNsRTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM3RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWVyRGVsaXZlcnlUeXBlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGlkPyA6IHN0cmluZztcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRmbGFzaHZhcnM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1pblZlcnNpb24/IDogc3RyaW5nO1xuXHRlbmFibGVkQnlEZWZhdWx0PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5ZXJEZWxpdmVyeVR5cGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0bGFiZWwgOiBzdHJpbmc7XG5cdGZsYXNodmFycyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtaW5WZXJzaW9uIDogc3RyaW5nO1xuXHRlbmFibGVkQnlEZWZhdWx0IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZsYXNodmFycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZmxhc2h2YXJzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFiZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhc2h2YXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtaW5WZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuYWJsZWRCeURlZmF1bHQgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZSddID0gS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZTsiXX0=