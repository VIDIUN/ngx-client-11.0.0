/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
/**
 * @record
 */
export function KalturaDropFolderTrRdsFileHandlerConfigArgs() { }
/** @type {?|undefined} */
KalturaDropFolderTrRdsFileHandlerConfigArgs.prototype.leadPattern;
/** @type {?|undefined} */
KalturaDropFolderTrRdsFileHandlerConfigArgs.prototype.additionalPatterns;
var KalturaDropFolderTrRdsFileHandlerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderTrRdsFileHandlerConfig, _super);
    function KalturaDropFolderTrRdsFileHandlerConfig(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderTrRdsFileHandlerConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderTrRdsFileHandlerConfig' },
            leadPattern: { type: 's' },
            additionalPatterns: { type: 's' }
        });
        return result;
    };
    return KalturaDropFolderTrRdsFileHandlerConfig;
}(KalturaDropFolderFileHandlerConfig));
export { KalturaDropFolderTrRdsFileHandlerConfig };
if (false) {
    /** @type {?} */
    KalturaDropFolderTrRdsFileHandlerConfig.prototype.leadPattern;
    /** @type {?} */
    KalturaDropFolderTrRdsFileHandlerConfig.prototype.additionalPatterns;
}
typesMappingStorage['KalturaDropFolderTrRdsFileHandlerConfig'] = KalturaDropFolderTrRdsFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJUclJkc0ZpbGVIYW5kbGVyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7QUFRbEksSUFBQTtJQUE2RCxtRUFBa0M7SUFLM0YsaURBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQWhDTDtFQVU2RCxrQ0FBa0MsRUF1QjlGLENBQUE7QUF2QkQsbURBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUNBQXlDLENBQUMsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnLCBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnQXJncyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJUclJkc0ZpbGVIYW5kbGVyQ29uZmlnQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnQXJncyB7XG4gICAgbGVhZFBhdHRlcm4/IDogc3RyaW5nO1xuXHRhZGRpdGlvbmFsUGF0dGVybnM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWcgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnIHtcblxuICAgIGxlYWRQYXR0ZXJuIDogc3RyaW5nO1xuXHRhZGRpdGlvbmFsUGF0dGVybnMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyVHJSZHNGaWxlSGFuZGxlckNvbmZpZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWcnIH0sXG5cdFx0XHRcdGxlYWRQYXR0ZXJuIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkZGl0aW9uYWxQYXR0ZXJucyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlclRyUmRzRmlsZUhhbmRsZXJDb25maWcnXSA9IEthbHR1cmFEcm9wRm9sZGVyVHJSZHNGaWxlSGFuZGxlckNvbmZpZzsiXX0=