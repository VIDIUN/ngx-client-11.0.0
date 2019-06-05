/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaMetadataFieldChangedConditionArgs() { }
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.profileSystemName;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.versionA;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.versionB;
var KalturaMetadataFieldChangedCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataFieldChangedCondition, _super);
    function KalturaMetadataFieldChangedCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataFieldChangedCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataFieldChangedCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' },
            versionA: { type: 's' },
            versionB: { type: 's' }
        });
        return result;
    };
    return KalturaMetadataFieldChangedCondition;
}(KalturaMatchCondition));
export { KalturaMetadataFieldChangedCondition };
if (false) {
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.xPath;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.profileId;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.profileSystemName;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.versionA;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.versionB;
}
typesMappingStorage['KalturaMetadataFieldChangedCondition'] = KalturaMetadataFieldChangedCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXM0YsSUFBQTtJQUEwRCxnRUFBcUI7SUFRM0UsOENBQVksSUFBZ0Q7ZUFFeEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQXpDTDtFQWEwRCxxQkFBcUIsRUE2QjlFLENBQUE7QUE3QkQsZ0RBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWF0Y2hDb25kaXRpb24sIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFNYXRjaENvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIHtcbiAgICB4UGF0aD8gOiBzdHJpbmc7XG5cdHByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHByb2ZpbGVTeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0dmVyc2lvbkE/IDogc3RyaW5nO1xuXHR2ZXJzaW9uQj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YUZpZWxkQ2hhbmdlZENvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbiB7XG5cbiAgICB4UGF0aCA6IHN0cmluZztcblx0cHJvZmlsZUlkIDogbnVtYmVyO1xuXHRwcm9maWxlU3lzdGVtTmFtZSA6IHN0cmluZztcblx0dmVyc2lvbkEgOiBzdHJpbmc7XG5cdHZlcnNpb25CIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHR4UGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvZmlsZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbkEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbkIgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uJ10gPSBLYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb247Il19