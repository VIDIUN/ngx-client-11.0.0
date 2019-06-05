/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
/**
 * @record
 */
export function KalturaDropFolderContentFileHandlerConfigArgs() { }
/** @type {?|undefined} */
KalturaDropFolderContentFileHandlerConfigArgs.prototype.contentMatchPolicy;
/** @type {?|undefined} */
KalturaDropFolderContentFileHandlerConfigArgs.prototype.slugRegex;
var KalturaDropFolderContentFileHandlerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderContentFileHandlerConfig, _super);
    function KalturaDropFolderContentFileHandlerConfig(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderContentFileHandlerConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderContentFileHandlerConfig' },
            contentMatchPolicy: { type: 'en', subTypeConstructor: KalturaDropFolderContentFileHandlerMatchPolicy, subType: 'KalturaDropFolderContentFileHandlerMatchPolicy' },
            slugRegex: { type: 's' }
        });
        return result;
    };
    return KalturaDropFolderContentFileHandlerConfig;
}(KalturaDropFolderFileHandlerConfig));
export { KalturaDropFolderContentFileHandlerConfig };
if (false) {
    /** @type {?} */
    KalturaDropFolderContentFileHandlerConfig.prototype.contentMatchPolicy;
    /** @type {?} */
    KalturaDropFolderContentFileHandlerConfig.prototype.slugRegex;
}
typesMappingStorage['KalturaDropFolderContentFileHandlerConfig'] = KalturaDropFolderContentFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJDb250ZW50RmlsZUhhbmRsZXJDb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7O0FBUWxJLElBQUE7SUFBK0QscUVBQWtDO0lBSzdGLG1EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhDQUE4QyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNySyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0RBakNMO0VBVytELGtDQUFrQyxFQXVCaEcsQ0FBQTtBQXZCRCxxREF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxHQUFHLHlDQUF5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3kgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZywgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZ0FyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyQ29uZmlnQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnQXJncyB7XG4gICAgY29udGVudE1hdGNoUG9saWN5PyA6IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3k7XG5cdHNsdWdSZWdleD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyQ29uZmlnIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZyB7XG5cbiAgICBjb250ZW50TWF0Y2hQb2xpY3kgOiBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRGaWxlSGFuZGxlck1hdGNoUG9saWN5O1xuXHRzbHVnUmVnZXggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyQ29uZmlnQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyQ29uZmlnJyB9LFxuXHRcdFx0XHRjb250ZW50TWF0Y2hQb2xpY3kgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRGaWxlSGFuZGxlck1hdGNoUG9saWN5LCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3knIH0sXG5cdFx0XHRcdHNsdWdSZWdleCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRGaWxlSGFuZGxlckNvbmZpZyddID0gS2FsdHVyYURyb3BGb2xkZXJDb250ZW50RmlsZUhhbmRsZXJDb25maWc7Il19