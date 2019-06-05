/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaModifyEntryObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputMetadataProfileId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputMetadata;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.outputMetadataProfileId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.outputMetadata;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputUserId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputEntitledUsersEdit;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputEntitledUsersPublish;
var KalturaModifyEntryObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaModifyEntryObjectTask, _super);
    function KalturaModifyEntryObjectTask(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.inputMetadata === 'undefined')
            _this.inputMetadata = [];
        if (typeof _this.outputMetadata === 'undefined')
            _this.outputMetadata = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaModifyEntryObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaModifyEntryObjectTask' },
            inputMetadataProfileId: { type: 'n' },
            inputMetadata: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            outputMetadataProfileId: { type: 'n' },
            outputMetadata: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            inputUserId: { type: 's' },
            inputEntitledUsersEdit: { type: 's' },
            inputEntitledUsersPublish: { type: 's' }
        });
        return result;
    };
    return KalturaModifyEntryObjectTask;
}(KalturaObjectTask));
export { KalturaModifyEntryObjectTask };
if (false) {
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputMetadataProfileId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputMetadata;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.outputMetadataProfileId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.outputMetadata;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputUserId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputEntitledUsersEdit;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputEntitledUsersPublish;
}
typesMappingStorage['KalturaModifyEntryObjectTask'] = KalturaModifyEntryObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYS9FLElBQUE7SUFBa0Qsd0RBQWlCO0lBVS9ELHNDQUFZLElBQXdDO1FBQXBELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDN0UsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsY0FBYyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDOztLQUN0RTs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDakcsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNsRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0FsREw7RUFnQmtELGlCQUFpQixFQW1DbEUsQ0FBQTtBQW5DRCx3Q0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFza0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2tBcmdzIHtcbiAgICBpbnB1dE1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0aW5wdXRNZXRhZGF0YT8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0b3V0cHV0TWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRvdXRwdXRNZXRhZGF0YT8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0aW5wdXRVc2VySWQ/IDogc3RyaW5nO1xuXHRpbnB1dEVudGl0bGVkVXNlcnNFZGl0PyA6IHN0cmluZztcblx0aW5wdXRFbnRpdGxlZFVzZXJzUHVibGlzaD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNb2RpZnlFbnRyeU9iamVjdFRhc2sgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFzayB7XG5cbiAgICBpbnB1dE1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRpbnB1dE1ldGFkYXRhIDogS2FsdHVyYUtleVZhbHVlW107XG5cdG91dHB1dE1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRvdXRwdXRNZXRhZGF0YSA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRpbnB1dFVzZXJJZCA6IHN0cmluZztcblx0aW5wdXRFbnRpdGxlZFVzZXJzRWRpdCA6IHN0cmluZztcblx0aW5wdXRFbnRpdGxlZFVzZXJzUHVibGlzaCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFza0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0TWV0YWRhdGEgPT09ICd1bmRlZmluZWQnKSB0aGlzLmlucHV0TWV0YWRhdGEgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMub3V0cHV0TWV0YWRhdGEgPT09ICd1bmRlZmluZWQnKSB0aGlzLm91dHB1dE1ldGFkYXRhID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzaycgfSxcblx0XHRcdFx0aW5wdXRNZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpbnB1dE1ldGFkYXRhIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRvdXRwdXRNZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvdXRwdXRNZXRhZGF0YSA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0aW5wdXRVc2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aW5wdXRFbnRpdGxlZFVzZXJzRWRpdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbnB1dEVudGl0bGVkVXNlcnNQdWJsaXNoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNb2RpZnlFbnRyeU9iamVjdFRhc2snXSA9IEthbHR1cmFNb2RpZnlFbnRyeU9iamVjdFRhc2s7Il19