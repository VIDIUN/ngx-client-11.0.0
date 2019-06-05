/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUiConfTypeInfoArgs() { }
/** @type {?|undefined} */
KalturaUiConfTypeInfoArgs.prototype.type;
/** @type {?|undefined} */
KalturaUiConfTypeInfoArgs.prototype.versions;
/** @type {?|undefined} */
KalturaUiConfTypeInfoArgs.prototype.directory;
/** @type {?|undefined} */
KalturaUiConfTypeInfoArgs.prototype.filename;
var KalturaUiConfTypeInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUiConfTypeInfo, _super);
    function KalturaUiConfTypeInfo(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.versions === 'undefined')
            _this.versions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaUiConfTypeInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUiConfTypeInfo' },
            type: { type: 'en', subTypeConstructor: KalturaUiConfObjType, subType: 'KalturaUiConfObjType' },
            versions: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            directory: { type: 's' },
            filename: { type: 's' }
        });
        return result;
    };
    return KalturaUiConfTypeInfo;
}(KalturaObjectBase));
export { KalturaUiConfTypeInfo };
if (false) {
    /** @type {?} */
    KalturaUiConfTypeInfo.prototype.type;
    /** @type {?} */
    KalturaUiConfTypeInfo.prototype.versions;
    /** @type {?} */
    KalturaUiConfTypeInfo.prototype.directory;
    /** @type {?} */
    KalturaUiConfTypeInfo.prototype.filename;
}
typesMappingStorage['KalturaUiConfTypeInfo'] = KalturaUiConfTypeInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVpQ29uZlR5cGVJbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVWlDb25mVHlwZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQTJDLGlEQUFpQjtJQU94RCwrQkFBWSxJQUFpQztRQUE3QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztLQUNoRTs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ25HLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDeEYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBekNMO0VBYzJDLGlCQUFpQixFQTRCM0QsQ0FBQTtBQTVCRCxpQ0E0QkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVWlDb25mT2JqVHlwZSB9IGZyb20gJy4vS2FsdHVyYVVpQ29uZk9ialR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVpQ29uZlR5cGVJbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHR5cGU/IDogS2FsdHVyYVVpQ29uZk9ialR5cGU7XG5cdHZlcnNpb25zPyA6IEthbHR1cmFTdHJpbmdbXTtcblx0ZGlyZWN0b3J5PyA6IHN0cmluZztcblx0ZmlsZW5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVWlDb25mVHlwZUluZm8gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB0eXBlIDogS2FsdHVyYVVpQ29uZk9ialR5cGU7XG5cdHZlcnNpb25zIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRkaXJlY3RvcnkgOiBzdHJpbmc7XG5cdGZpbGVuYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVWlDb25mVHlwZUluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52ZXJzaW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudmVyc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVWlDb25mVHlwZUluZm8nIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mT2JqVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVWlDb25mT2JqVHlwZScgfSxcblx0XHRcdFx0dmVyc2lvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0ZGlyZWN0b3J5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVuYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVaUNvbmZUeXBlSW5mbyddID0gS2FsdHVyYVVpQ29uZlR5cGVJbmZvOyJdfQ==