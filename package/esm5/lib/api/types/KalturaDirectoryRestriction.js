/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDirectoryRestrictionType } from './KalturaDirectoryRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaDirectoryRestrictionArgs() { }
/** @type {?|undefined} */
KalturaDirectoryRestrictionArgs.prototype.directoryRestrictionType;
var KalturaDirectoryRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDirectoryRestriction, _super);
    function KalturaDirectoryRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDirectoryRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDirectoryRestriction' },
            directoryRestrictionType: { type: 'en', subTypeConstructor: KalturaDirectoryRestrictionType, subType: 'KalturaDirectoryRestrictionType' }
        });
        return result;
    };
    return KalturaDirectoryRestriction;
}(KalturaBaseRestriction));
export { KalturaDirectoryRestriction };
if (false) {
    /** @type {?} */
    KalturaDirectoryRestriction.prototype.directoryRestrictionType;
}
typesMappingStorage['KalturaDirectoryRestriction'] = KalturaDirectoryRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLElBQUE7SUFBaUQsdURBQXNCO0lBSW5FLHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtTQUNwSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTlCTDtFQVVpRCxzQkFBc0IsRUFxQnRFLENBQUE7QUFyQkQsdUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VSZXN0cmljdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB7XG4gICAgZGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlPyA6IEthbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvblR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvbiBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb24ge1xuXG4gICAgZGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlIDogS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0ZGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb24nXSA9IEthbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvbjsiXX0=