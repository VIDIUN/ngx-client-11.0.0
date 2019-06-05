/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDrmProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.providerEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.providerIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.statusIn;
export class KalturaDrmProfileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaDrmProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameLike: { type: 's' },
            providerEqual: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            providerIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDrmProfileStatus, subType: 'KalturaDrmProfileStatus' },
            statusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.providerEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.providerIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaDrmProfileBaseFilter'] = KalturaDrmProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVByb2ZpbGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVuRSxNQUFNLGtDQUFtQyxTQUFRLGFBQWE7Ozs7SUFZMUQsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2hILFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDaEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURybVByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURybVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm1Qcm9maWxlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdG5hbWVMaWtlPyA6IHN0cmluZztcblx0cHJvdmlkZXJFcXVhbD8gOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURybVByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHRwcm92aWRlckVxdWFsIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblx0cHJvdmlkZXJJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm1Qcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlckVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRwcm92aWRlckluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm1Qcm9maWxlQmFzZUZpbHRlciddID0gS2FsdHVyYURybVByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==