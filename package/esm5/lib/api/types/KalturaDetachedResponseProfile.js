/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaDetachedResponseProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDetachedResponseProfile, _super);
    function KalturaDetachedResponseProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.relatedProfiles === 'undefined')
            _this.relatedProfiles = [];
        if (typeof _this.mappings === 'undefined')
            _this.mappings = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDetachedResponseProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaDetachedResponseProfile;
}(KalturaBaseResponseProfile));
export { KalturaDetachedResponseProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTFHLElBQUE7SUFBb0QsMERBQTBCO0lBVTFFLHdDQUFZLElBQTBDO1FBQXRELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDakYsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztLQUMxRDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0csTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUNwRyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNqSSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUMvRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXJETDtFQW1Cb0QsMEJBQTBCLEVBbUM3RSxDQUFBO0FBbkNELDBDQW1DQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVByb2ZpbGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVzcG9uc2VQcm9maWxlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlLCBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVR5cGU7XG5cdGZpZWxkcz8gOiBzdHJpbmc7XG5cdGZpbHRlcj8gOiBLYWx0dXJhUmVsYXRlZEZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXHRyZWxhdGVkUHJvZmlsZXM/IDogS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlW107XG5cdG1hcHBpbmdzPyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSBleHRlbmRzIEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlIHtcblxuICAgIG5hbWUgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlVHlwZTtcblx0ZmllbGRzIDogc3RyaW5nO1xuXHRmaWx0ZXIgOiBLYWx0dXJhUmVsYXRlZEZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cdHJlbGF0ZWRQcm9maWxlcyA6IEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZVtdO1xuXHRtYXBwaW5ncyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlbGF0ZWRQcm9maWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVsYXRlZFByb2ZpbGVzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcHBpbmdzID09PSAndW5kZWZpbmVkJykgdGhpcy5tYXBwaW5ncyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVR5cGUnIH0sXG5cdFx0XHRcdGZpZWxkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFSZWxhdGVkRmlsdGVyJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfSxcblx0XHRcdFx0cmVsYXRlZFByb2ZpbGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlJyB9LFxuXHRcdFx0XHRtYXBwaW5ncyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSddID0gS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlOyJdfQ==