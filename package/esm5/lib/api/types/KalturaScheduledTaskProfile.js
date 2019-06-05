/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaScheduledTaskProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduledTaskProfile, _super);
    function KalturaScheduledTaskProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objectTasks === 'undefined')
            _this.objectTasks = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaScheduledTaskProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaScheduledTaskProfile;
}(KalturaObjectBase));
export { KalturaScheduledTaskProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbEYsSUFBQTtJQUFpRCx1REFBaUI7SUFnQjlELHFDQUFZLElBQXVDO1FBQW5ELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O0tBQ3RFOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUMvSCxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3ZJLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDNUYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBbEVMO0VBcUJpRCxpQkFBaUIsRUE4Q2pFLENBQUE7QUE5Q0QsdUNBOENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGUgfSBmcm9tICcuL0thbHR1cmFPYmplY3RGaWx0ZXJFbmdpbmVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2sgfSBmcm9tICcuL0thbHR1cmFPYmplY3RUYXNrJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVTdGF0dXM7XG5cdG9iamVjdEZpbHRlckVuZ2luZVR5cGU/IDogS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGU7XG5cdG9iamVjdEZpbHRlcj8gOiBLYWx0dXJhRmlsdGVyO1xuXHRvYmplY3RUYXNrcz8gOiBLYWx0dXJhT2JqZWN0VGFza1tdO1xuXHRsYXN0RXhlY3V0aW9uU3RhcnRlZEF0PyA6IERhdGU7XG5cdG1heFRvdGFsQ291bnRBbGxvd2VkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHN0YXR1cyA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZVN0YXR1cztcblx0b2JqZWN0RmlsdGVyRW5naW5lVHlwZSA6IEthbHR1cmFPYmplY3RGaWx0ZXJFbmdpbmVUeXBlO1xuXHRvYmplY3RGaWx0ZXIgOiBLYWx0dXJhRmlsdGVyO1xuXHRvYmplY3RUYXNrcyA6IEthbHR1cmFPYmplY3RUYXNrW107XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdGxhc3RFeGVjdXRpb25TdGFydGVkQXQgOiBEYXRlO1xuXHRtYXhUb3RhbENvdW50QWxsb3dlZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqZWN0VGFza3MgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9iamVjdFRhc2tzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRvYmplY3RGaWx0ZXJFbmdpbmVUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdEZpbHRlckVuZ2luZVR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdEZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyJyB9LFxuXHRcdFx0XHRvYmplY3RUYXNrcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9iamVjdFRhc2ssIHN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdFRhc2snIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxhc3RFeGVjdXRpb25TdGFydGVkQXQgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0bWF4VG90YWxDb3VudEFsbG93ZWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJ10gPSBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGU7Il19