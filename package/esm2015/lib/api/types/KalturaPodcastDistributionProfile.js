/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaPodcastDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaPodcastDistributionProfileArgs.prototype.xsl;
/** @type {?|undefined} */
KalturaPodcastDistributionProfileArgs.prototype.metadataProfileId;
export class KalturaPodcastDistributionProfile extends KalturaDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaPodcastDistributionProfile' },
            xsl: { type: 's' },
            feedId: { type: 's', readOnly: true },
            metadataProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPodcastDistributionProfile.prototype.xsl;
    /** @type {?} */
    KalturaPodcastDistributionProfile.prototype.feedId;
    /** @type {?} */
    KalturaPodcastDistributionProfile.prototype.metadataProfileId;
}
typesMappingStorage['KalturaPodcastDistributionProfile'] = KalturaPodcastDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBvZGNhc3REaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztBQVExRyxNQUFNLHdDQUF5QyxTQUFRLDBCQUEwQjs7OztJQU03RSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN4QyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgeHNsPyA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICB4c2wgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZlZWRJZCA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHhzbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkSWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=