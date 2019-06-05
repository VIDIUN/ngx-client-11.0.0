/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaMetadataProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.metadataObjectTypeEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.metadataObjectTypeIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.versionEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeNotEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeNotIn;
var KalturaMetadataProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataProfileBaseFilter, _super);
    function KalturaMetadataProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataProfileBaseFilter' },
            idEqual: { type: 'n' },
            partnerIdEqual: { type: 'n' },
            metadataObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            metadataObjectTypeIn: { type: 's' },
            versionEqual: { type: 'n' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileStatus, subType: 'KalturaMetadataProfileStatus' },
            statusIn: { type: 's' },
            createModeEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileCreateMode, subType: 'KalturaMetadataProfileCreateMode' },
            createModeNotEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileCreateMode, subType: 'KalturaMetadataProfileCreateMode' },
            createModeIn: { type: 's' },
            createModeNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaMetadataProfileBaseFilter;
}(KalturaFilter));
export { KalturaMetadataProfileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.metadataObjectTypeEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.metadataObjectTypeIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.versionEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeNotEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeNotIn;
}
typesMappingStorage['KalturaMetadataProfileBaseFilter'] = KalturaMetadataProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JuRSxJQUFBO0lBQXNELDREQUFhO0lBcUIvRCwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ2hJLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMxSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3RJLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDekksWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBbkZMO0VBNkJzRCxhQUFhLEVBdURsRSxDQUFBO0FBdkRELDRDQXVEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZUluPyA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsPyA6IG51bWJlcjtcblx0bmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y3JlYXRlTW9kZUVxdWFsPyA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlO1xuXHRjcmVhdGVNb2RlTm90RXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGU7XG5cdGNyZWF0ZU1vZGVJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZU1vZGVOb3RJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0bWV0YWRhdGFPYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRtZXRhZGF0YU9iamVjdFR5cGVJbiA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsIDogbnVtYmVyO1xuXHRuYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdGVNb2RlRXF1YWwgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZTtcblx0Y3JlYXRlTW9kZU5vdEVxdWFsIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGU7XG5cdGNyZWF0ZU1vZGVJbiA6IHN0cmluZztcblx0Y3JlYXRlTW9kZU5vdEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YU9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0bWV0YWRhdGFPYmplY3RUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlTW9kZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUnIH0sXG5cdFx0XHRcdGNyZWF0ZU1vZGVOb3RFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlJyB9LFxuXHRcdFx0XHRjcmVhdGVNb2RlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlTW9kZU5vdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQmFzZUZpbHRlcjsiXX0=