/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaObjectFilterEngineType } from './KalturaObjectFilterEngineType';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectTask } from './KalturaObjectTask';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaScheduledTaskProfileArgs() { }
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.objectFilterEngineType;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.objectFilter;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.objectTasks;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.lastExecutionStartedAt;
/** @type {?|undefined} */
KalturaScheduledTaskProfileArgs.prototype.maxTotalCountAllowed;
export class KalturaScheduledTaskProfile extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.objectTasks === 'undefined')
            this.objectTasks = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduledTaskProfile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaScheduledTaskProfileStatus, subType: 'KalturaScheduledTaskProfileStatus' },
            objectFilterEngineType: { type: 'es', subTypeConstructor: KalturaObjectFilterEngineType, subType: 'KalturaObjectFilterEngineType' },
            objectFilter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            objectTasks: { type: 'a', subTypeConstructor: KalturaObjectTask, subType: 'KalturaObjectTask' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            lastExecutionStartedAt: { type: 'd' },
            maxTotalCountAllowed: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.id;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.partnerId;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.name;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.systemName;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.description;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.status;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.objectFilterEngineType;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.objectFilter;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.objectTasks;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.createdAt;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.lastExecutionStartedAt;
    /** @type {?} */
    KalturaScheduledTaskProfile.prototype.maxTotalCountAllowed;
}
typesMappingStorage['KalturaScheduledTaskProfile'] = KalturaScheduledTaskProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRixNQUFNLGtDQUFtQyxTQUFRLGlCQUFpQjs7OztJQWdCOUQsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDdEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDL0gsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN2SSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQzVGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0RmlsdGVyRW5naW5lVHlwZSB9IGZyb20gJy4vS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzayB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0c3RhdHVzPyA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZVN0YXR1cztcblx0b2JqZWN0RmlsdGVyRW5naW5lVHlwZT8gOiBLYWx0dXJhT2JqZWN0RmlsdGVyRW5naW5lVHlwZTtcblx0b2JqZWN0RmlsdGVyPyA6IEthbHR1cmFGaWx0ZXI7XG5cdG9iamVjdFRhc2tzPyA6IEthbHR1cmFPYmplY3RUYXNrW107XG5cdGxhc3RFeGVjdXRpb25TdGFydGVkQXQ/IDogRGF0ZTtcblx0bWF4VG90YWxDb3VudEFsbG93ZWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0c3RhdHVzIDogS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlU3RhdHVzO1xuXHRvYmplY3RGaWx0ZXJFbmdpbmVUeXBlIDogS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGU7XG5cdG9iamVjdEZpbHRlciA6IEthbHR1cmFGaWx0ZXI7XG5cdG9iamVjdFRhc2tzIDogS2FsdHVyYU9iamVjdFRhc2tbXTtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0bGFzdEV4ZWN1dGlvblN0YXJ0ZWRBdCA6IERhdGU7XG5cdG1heFRvdGFsQ291bnRBbGxvd2VkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3RUYXNrcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub2JqZWN0VGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdG9iamVjdEZpbHRlckVuZ2luZVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0RmlsdGVyRW5naW5lVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhT2JqZWN0RmlsdGVyRW5naW5lVHlwZScgfSxcblx0XHRcdFx0b2JqZWN0RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXInIH0sXG5cdFx0XHRcdG9iamVjdFRhc2tzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0VGFzaywgc3ViVHlwZSA6ICdLYWx0dXJhT2JqZWN0VGFzaycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGFzdEV4ZWN1dGlvblN0YXJ0ZWRBdCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRtYXhUb3RhbENvdW50QWxsb3dlZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUnXSA9IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZTsiXX0=