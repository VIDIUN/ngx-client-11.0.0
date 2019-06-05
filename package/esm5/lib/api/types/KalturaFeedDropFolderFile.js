/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
/**
 * @record
 */
export function KalturaFeedDropFolderFileArgs() { }
/** @type {?|undefined} */
KalturaFeedDropFolderFileArgs.prototype.hash;
/** @type {?|undefined} */
KalturaFeedDropFolderFileArgs.prototype.feedXmlPath;
var KalturaFeedDropFolderFile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFeedDropFolderFile, _super);
    function KalturaFeedDropFolderFile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFeedDropFolderFile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFeedDropFolderFile' },
            hash: { type: 's' },
            feedXmlPath: { type: 's' }
        });
        return result;
    };
    return KalturaFeedDropFolderFile;
}(KalturaDropFolderFile));
export { KalturaFeedDropFolderFile };
if (false) {
    /** @type {?} */
    KalturaFeedDropFolderFile.prototype.hash;
    /** @type {?} */
    KalturaFeedDropFolderFile.prototype.feedXmlPath;
}
typesMappingStorage['KalturaFeedDropFolderFile'] = KalturaFeedDropFolderFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixJQUFBO0lBQStDLHFEQUFxQjtJQUtoRSxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQWhDTDtFQVUrQyxxQkFBcUIsRUF1Qm5FLENBQUE7QUF2QkQscUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGUsIEthbHR1cmFEcm9wRm9sZGVyRmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncyB7XG4gICAgaGFzaD8gOiBzdHJpbmc7XG5cdGZlZWRYbWxQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZSBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZSB7XG5cbiAgICBoYXNoIDogc3RyaW5nO1xuXHRmZWVkWG1sUGF0aCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlJyB9LFxuXHRcdFx0XHRoYXNoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRYbWxQYXRoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGZWVkRHJvcEZvbGRlckZpbGUnXSA9IEthbHR1cmFGZWVkRHJvcEZvbGRlckZpbGU7Il19