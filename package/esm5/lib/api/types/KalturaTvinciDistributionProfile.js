/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaTvinciDistributionTag } from './KalturaTvinciDistributionTag';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaTvinciDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.ingestUrl;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.tags;
/** @type {?|undefined} */
KalturaTvinciDistributionProfileArgs.prototype.xsltFile;
var KalturaTvinciDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTvinciDistributionProfile, _super);
    function KalturaTvinciDistributionProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.tags === 'undefined')
            _this.tags = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaTvinciDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTvinciDistributionProfile' },
            ingestUrl: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            tags: { type: 'a', subTypeConstructor: KalturaTvinciDistributionTag, subType: 'KalturaTvinciDistributionTag' },
            xsltFile: { type: 's' }
        });
        return result;
    };
    return KalturaTvinciDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaTvinciDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.ingestUrl;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.tags;
    /** @type {?} */
    KalturaTvinciDistributionProfile.prototype.xsltFile;
}
typesMappingStorage['KalturaTvinciDistributionProfile'] = KalturaTvinciDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzlJLElBQUE7SUFBc0QsNERBQXNDO0lBUXhGLDBDQUFZLElBQTRDO1FBQXhELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0tBQ3hEOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDbEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTNDTDtFQWNzRCxzQ0FBc0MsRUE4QjNGLENBQUE7QUE5QkQsNENBOEJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnIH0gZnJvbSAnLi9LYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBpbmdlc3RVcmw/IDogc3RyaW5nO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0dGFncz8gOiBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnW107XG5cdHhzbHRGaWxlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBpbmdlc3RVcmwgOiBzdHJpbmc7XG5cdHVzZXJuYW1lIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0dGFncyA6IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWdbXTtcblx0eHNsdEZpbGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGFncyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudGFncyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUdmluY2lEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRpbmdlc3RVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZywgc3ViVHlwZSA6ICdLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJyB9LFxuXHRcdFx0XHR4c2x0RmlsZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblByb2ZpbGU7Il19