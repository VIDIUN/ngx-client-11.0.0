/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaConversionProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.defaultEntryIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.defaultEntryIdIn;
export class KalturaConversionProfileBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaConversionProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaConversionProfileStatus, subType: 'KalturaConversionProfileStatus' },
            statusIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaConversionProfileType, subType: 'KalturaConversionProfileType' },
            typeIn: { type: 's' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            defaultEntryIdEqual: { type: 's' },
            defaultEntryIdIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.defaultEntryIdEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.defaultEntryIdIn;
}
typesMappingStorage['KalturaConversionProfileBaseFilter'] = KalturaConversionProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CeEYsTUFBTSx5Q0FBMEMsU0FBUSxvQkFBb0I7Ozs7SUFnQnhFLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3hILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbD8gOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlO1xuXHR0eXBlSW4/IDogc3RyaW5nO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGRlZmF1bHRFbnRyeUlkSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWRJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGUnIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0RW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlZmF1bHRFbnRyeUlkSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlciddID0gS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlcjsiXX0=