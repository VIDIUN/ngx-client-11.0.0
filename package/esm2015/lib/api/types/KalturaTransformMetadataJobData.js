/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaTransformMetadataJobDataArgs() { }
/** @type {?|undefined} */
KalturaTransformMetadataJobDataArgs.prototype.srcXsl;
/** @type {?|undefined} */
KalturaTransformMetadataJobDataArgs.prototype.srcVersion;
/** @type {?|undefined} */
KalturaTransformMetadataJobDataArgs.prototype.destVersion;
/** @type {?|undefined} */
KalturaTransformMetadataJobDataArgs.prototype.destXsd;
/** @type {?|undefined} */
KalturaTransformMetadataJobDataArgs.prototype.metadataProfileId;
export class KalturaTransformMetadataJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaTransformMetadataJobData' },
            srcXsl: { type: 'o', subTypeConstructor: KalturaFileContainer, subType: 'KalturaFileContainer' },
            srcVersion: { type: 'n' },
            destVersion: { type: 'n' },
            destXsd: { type: 'o', subTypeConstructor: KalturaFileContainer, subType: 'KalturaFileContainer' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTransformMetadataJobData.prototype.srcXsl;
    /** @type {?} */
    KalturaTransformMetadataJobData.prototype.srcVersion;
    /** @type {?} */
    KalturaTransformMetadataJobData.prototype.destVersion;
    /** @type {?} */
    KalturaTransformMetadataJobData.prototype.destXsd;
    /** @type {?} */
    KalturaTransformMetadataJobData.prototype.metadataProfileId;
}
typesMappingStorage['KalturaTransformMetadataJobData'] = KalturaTransformMetadataJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyYW5zZm9ybU1ldGFkYXRhSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRyYW5zZm9ybU1ldGFkYXRhSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVd0RSxNQUFNLHNDQUF1QyxTQUFRLGNBQWM7Ozs7SUFRL0QsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDcEcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3JHLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQ29udGFpbmVyIH0gZnJvbSAnLi9LYWx0dXJhRmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRyYW5zZm9ybU1ldGFkYXRhSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzcmNYc2w/IDogS2FsdHVyYUZpbGVDb250YWluZXI7XG5cdHNyY1ZlcnNpb24/IDogbnVtYmVyO1xuXHRkZXN0VmVyc2lvbj8gOiBudW1iZXI7XG5cdGRlc3RYc2Q/IDogS2FsdHVyYUZpbGVDb250YWluZXI7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRyYW5zZm9ybU1ldGFkYXRhSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHNyY1hzbCA6IEthbHR1cmFGaWxlQ29udGFpbmVyO1xuXHRzcmNWZXJzaW9uIDogbnVtYmVyO1xuXHRkZXN0VmVyc2lvbiA6IG51bWJlcjtcblx0ZGVzdFhzZCA6IEthbHR1cmFGaWxlQ29udGFpbmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRyYW5zZm9ybU1ldGFkYXRhSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHJhbnNmb3JtTWV0YWRhdGFKb2JEYXRhJyB9LFxuXHRcdFx0XHRzcmNYc2wgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQ29udGFpbmVyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHRzcmNWZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlc3RWZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlc3RYc2QgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQ29udGFpbmVyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHJhbnNmb3JtTWV0YWRhdGFKb2JEYXRhJ10gPSBLYWx0dXJhVHJhbnNmb3JtTWV0YWRhdGFKb2JEYXRhOyJdfQ==