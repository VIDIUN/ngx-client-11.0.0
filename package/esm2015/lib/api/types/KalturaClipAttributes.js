/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
/**
 * @record
 */
export function KalturaClipAttributesArgs() { }
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.offset;
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.duration;
/** @type {?|undefined} */
KalturaClipAttributesArgs.prototype.globalOffsetInDestination;
export class KalturaClipAttributes extends KalturaOperationAttributes {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClipAttributes' },
            offset: { type: 'n' },
            duration: { type: 'n' },
            globalOffsetInDestination: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaClipAttributes.prototype.offset;
    /** @type {?} */
    KalturaClipAttributes.prototype.duration;
    /** @type {?} */
    KalturaClipAttributes.prototype.globalOffsetInDestination;
}
typesMappingStorage['KalturaClipAttributes'] = KalturaClipAttributes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBBdHRyaWJ1dGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2xpcEF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0FBUzFHLE1BQU0sNEJBQTZCLFNBQVEsMEJBQTBCOzs7O0lBTWpFLFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzLCBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2xpcEF0dHJpYnV0ZXNBcmdzICBleHRlbmRzIEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzQXJncyB7XG4gICAgb2Zmc2V0PyA6IG51bWJlcjtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xuXHRnbG9iYWxPZmZzZXRJbkRlc3RpbmF0aW9uPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNsaXBBdHRyaWJ1dGVzIGV4dGVuZHMgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMge1xuXG4gICAgb2Zmc2V0IDogbnVtYmVyO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblx0Z2xvYmFsT2Zmc2V0SW5EZXN0aW5hdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNsaXBBdHRyaWJ1dGVzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDbGlwQXR0cmlidXRlcycgfSxcblx0XHRcdFx0b2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGdsb2JhbE9mZnNldEluRGVzdGluYXRpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNsaXBBdHRyaWJ1dGVzJ10gPSBLYWx0dXJhQ2xpcEF0dHJpYnV0ZXM7Il19