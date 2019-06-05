/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaFreewheelGenericDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionJobProviderDataArgs.prototype.videoAssetFilePaths;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionJobProviderDataArgs.prototype.thumbAssetFilePath;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionJobProviderDataArgs.prototype.cuePoints;
export class KalturaFreewheelGenericDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.videoAssetFilePaths === 'undefined')
            this.videoAssetFilePaths = [];
        if (typeof this.cuePoints === 'undefined')
            this.cuePoints = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFreewheelGenericDistributionJobProviderData' },
            videoAssetFilePaths: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            thumbAssetFilePath: { type: 's' },
            cuePoints: { type: 'a', subTypeConstructor: KalturaCuePoint, subType: 'KalturaCuePoint' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFreewheelGenericDistributionJobProviderData.prototype.videoAssetFilePaths;
    /** @type {?} */
    KalturaFreewheelGenericDistributionJobProviderData.prototype.thumbAssetFilePath;
    /** @type {?} */
    KalturaFreewheelGenericDistributionJobProviderData.prototype.cuePoints;
}
typesMappingStorage['KalturaFreewheelGenericDistributionJobProviderData'] = KalturaFreewheelGenericDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7O0FBU3RLLE1BQU0seURBQTBELFNBQVEsOENBQThDOzs7O0lBTWxILFlBQVksSUFBOEQ7UUFFdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6RixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDNUQ7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9EQUFvRCxFQUFFO1lBQ3ZHLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNuRyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ3BGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0RBQW9ELENBQUMsR0FBRyxrREFBa0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIHZpZGVvQXNzZXRGaWxlUGF0aHM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRjdWVQb2ludHM/IDogS2FsdHVyYUN1ZVBvaW50W107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGhzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdGN1ZVBvaW50cyA6IEthbHR1cmFDdWVQb2ludFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpZGVvQXNzZXRGaWxlUGF0aHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnZpZGVvQXNzZXRGaWxlUGF0aHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuY3VlUG9pbnRzID09PSAndW5kZWZpbmVkJykgdGhpcy5jdWVQb2ludHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0dmlkZW9Bc3NldEZpbGVQYXRocyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VlUG9pbnRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19