/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaStringResourceArgs() { }
/** @type {?|undefined} */
KalturaStringResourceArgs.prototype.content;
var KalturaStringResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStringResource, _super);
    function KalturaStringResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStringResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStringResource' },
            content: { type: 's' }
        });
        return result;
    };
    return KalturaStringResource;
}(KalturaContentResource));
export { KalturaStringResource };
if (false) {
    /** @type {?} */
    KalturaStringResource.prototype.content;
}
typesMappingStorage['KalturaStringResource'] = KalturaStringResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0cmluZ1Jlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RyaW5nUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLElBQUE7SUFBMkMsaURBQXNCO0lBSTdELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBN0JMO0VBUzJDLHNCQUFzQixFQXFCaEUsQ0FBQTtBQXJCRCxpQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGVudFJlc291cmNlLCBLYWx0dXJhQ29udGVudFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN0cmluZ1Jlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29udGVudFJlc291cmNlQXJncyB7XG4gICAgY29udGVudD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTdHJpbmdSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2Uge1xuXG4gICAgY29udGVudCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN0cmluZ1Jlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdHJpbmdSZXNvdXJjZScgfSxcblx0XHRcdFx0Y29udGVudCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RyaW5nUmVzb3VyY2UnXSA9IEthbHR1cmFTdHJpbmdSZXNvdXJjZTsiXX0=