/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfileType } from './KalturaResponseProfileType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaResponseProfileMapping } from './KalturaResponseProfileMapping';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
/**
 * @record
 */
export function KalturaDetachedResponseProfileArgs() { }
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.type;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.fields;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.filter;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.pager;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.relatedProfiles;
/** @type {?|undefined} */
KalturaDetachedResponseProfileArgs.prototype.mappings;
export class KalturaDetachedResponseProfile extends KalturaBaseResponseProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.relatedProfiles === 'undefined')
            this.relatedProfiles = [];
        if (typeof this.mappings === 'undefined')
            this.mappings = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDetachedResponseProfile' },
            name: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaResponseProfileType, subType: 'KalturaResponseProfileType' },
            fields: { type: 's' },
            filter: { type: 'o', subTypeConstructor: KalturaRelatedFilter, subType: 'KalturaRelatedFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' },
            relatedProfiles: { type: 'a', subTypeConstructor: KalturaDetachedResponseProfile, subType: 'KalturaDetachedResponseProfile' },
            mappings: { type: 'a', subTypeConstructor: KalturaResponseProfileMapping, subType: 'KalturaResponseProfileMapping' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.name;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.type;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.fields;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.filter;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.pager;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.relatedProfiles;
    /** @type {?} */
    KalturaDetachedResponseProfile.prototype.mappings;
}
typesMappingStorage['KalturaDetachedResponseProfile'] = KalturaDetachedResponseProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhMUcsTUFBTSxxQ0FBc0MsU0FBUSwwQkFBMEI7Ozs7SUFVMUUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDakYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQzFEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9HLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDcEcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDakksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDL0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVR5cGUgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVByb2ZpbGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZyB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUsIEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGVBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlVHlwZTtcblx0ZmllbGRzPyA6IHN0cmluZztcblx0ZmlsdGVyPyA6IEthbHR1cmFSZWxhdGVkRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cdHJlbGF0ZWRQcm9maWxlcz8gOiBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGVbXTtcblx0bWFwcGluZ3M/IDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmdbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUge1xuXG4gICAgbmFtZSA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVUeXBlO1xuXHRmaWVsZHMgOiBzdHJpbmc7XG5cdGZpbHRlciA6IEthbHR1cmFSZWxhdGVkRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblx0cmVsYXRlZFByb2ZpbGVzIDogS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlW107XG5cdG1hcHBpbmdzIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVsYXRlZFByb2ZpbGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5yZWxhdGVkUHJvZmlsZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwcGluZ3MgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcHBpbmdzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlVHlwZScgfSxcblx0XHRcdFx0ZmllbGRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVJlbGF0ZWRGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9LFxuXHRcdFx0XHRyZWxhdGVkUHJvZmlsZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUnIH0sXG5cdFx0XHRcdG1hcHBpbmdzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZywgc3ViVHlwZSA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlJ10gPSBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGU7Il19