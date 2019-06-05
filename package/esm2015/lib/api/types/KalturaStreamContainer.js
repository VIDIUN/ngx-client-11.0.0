/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaStreamContainerArgs() { }
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.type;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.trackIndex;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.language;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.channelIndex;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.label;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.channelLayout;
export class KalturaStreamContainer extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaStreamContainer' },
            type: { type: 's' },
            trackIndex: { type: 'n' },
            language: { type: 's' },
            channelIndex: { type: 'n' },
            label: { type: 's' },
            channelLayout: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStreamContainer.prototype.type;
    /** @type {?} */
    KalturaStreamContainer.prototype.trackIndex;
    /** @type {?} */
    KalturaStreamContainer.prototype.language;
    /** @type {?} */
    KalturaStreamContainer.prototype.channelIndex;
    /** @type {?} */
    KalturaStreamContainer.prototype.label;
    /** @type {?} */
    KalturaStreamContainer.prototype.channelLayout;
}
typesMappingStorage['KalturaStreamContainer'] = KalturaStreamContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0cmVhbUNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN0cmVhbUNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFTekQsWUFBWSxJQUFrQztRQUUxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RyZWFtQ29udGFpbmVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHR5cGU/IDogc3RyaW5nO1xuXHR0cmFja0luZGV4PyA6IG51bWJlcjtcblx0bGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRjaGFubmVsSW5kZXg/IDogbnVtYmVyO1xuXHRsYWJlbD8gOiBzdHJpbmc7XG5cdGNoYW5uZWxMYXlvdXQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RyZWFtQ29udGFpbmVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdHlwZSA6IHN0cmluZztcblx0dHJhY2tJbmRleCA6IG51bWJlcjtcblx0bGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGNoYW5uZWxJbmRleCA6IG51bWJlcjtcblx0bGFiZWwgOiBzdHJpbmc7XG5cdGNoYW5uZWxMYXlvdXQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdHJlYW1Db250YWluZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN0cmVhbUNvbnRhaW5lcicgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0cmFja0luZGV4IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGF5b3V0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdHJlYW1Db250YWluZXInXSA9IEthbHR1cmFTdHJlYW1Db250YWluZXI7Il19