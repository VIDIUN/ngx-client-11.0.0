/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYoutubeApiDistributionProfileBaseFilter } from './KalturaYoutubeApiDistributionProfileBaseFilter';
/**
 * @record
 */
export function KalturaYoutubeApiDistributionProfileFilterArgs() { }
export class KalturaYoutubeApiDistributionProfileFilter extends KalturaYoutubeApiDistributionProfileBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaYoutubeApiDistributionProfileFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaYoutubeApiDistributionProfileFilter'] = KalturaYoutubeApiDistributionProfileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7O0FBT3RLLE1BQU0saURBQWtELFNBQVEsOENBQThDOzs7O0lBSTFHLFlBQVksSUFBc0Q7UUFFOUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLDRDQUE0QyxDQUFDLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlciwgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXInXSA9IEthbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcjsiXX0=