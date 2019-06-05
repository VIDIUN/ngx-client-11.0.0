/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaExtractMediaJobDataArgs() { }
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.calculateComplexity;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.extractId3Tags;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.destDataFilePath;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.detectGOP;
export class KalturaExtractMediaJobData extends KalturaConvartableJobData {
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
            objectType: { type: 'c', default: 'KalturaExtractMediaJobData' },
            flavorAssetId: { type: 's' },
            calculateComplexity: { type: 'b' },
            extractId3Tags: { type: 'b' },
            destDataFilePath: { type: 's' },
            detectGOP: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.calculateComplexity;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.extractId3Tags;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.destDataFilePath;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.detectGOP;
}
typesMappingStorage['KalturaExtractMediaJobData'] = KalturaExtractMediaJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFeHRyYWN0TWVkaWFKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdkcsTUFBTSxpQ0FBa0MsU0FBUSx5QkFBeUI7Ozs7SUFRckUsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEsIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udmFydGFibGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRjYWxjdWxhdGVDb21wbGV4aXR5PyA6IGJvb2xlYW47XG5cdGV4dHJhY3RJZDNUYWdzPyA6IGJvb2xlYW47XG5cdGRlc3REYXRhRmlsZVBhdGg/IDogc3RyaW5nO1xuXHRkZXRlY3RHT1A/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YSBleHRlbmRzIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEge1xuXG4gICAgZmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0Y2FsY3VsYXRlQ29tcGxleGl0eSA6IGJvb2xlYW47XG5cdGV4dHJhY3RJZDNUYWdzIDogYm9vbGVhbjtcblx0ZGVzdERhdGFGaWxlUGF0aCA6IHN0cmluZztcblx0ZGV0ZWN0R09QIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YScgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYWxjdWxhdGVDb21wbGV4aXR5IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGV4dHJhY3RJZDNUYWdzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlc3REYXRhRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV0ZWN0R09QIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeHRyYWN0TWVkaWFKb2JEYXRhJ10gPSBLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YTsiXX0=