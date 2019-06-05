/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyDigitalAudioOPId } from './KalturaPlayReadyDigitalAudioOPId';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyDigitalAudioOPIdHolderArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyDigitalAudioOPIdHolderArgs.prototype.type;
var KalturaPlayReadyDigitalAudioOPIdHolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyDigitalAudioOPIdHolder, _super);
    function KalturaPlayReadyDigitalAudioOPIdHolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyDigitalAudioOPIdHolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyDigitalAudioOPIdHolder' },
            type: { type: 'es', subTypeConstructor: KalturaPlayReadyDigitalAudioOPId, subType: 'KalturaPlayReadyDigitalAudioOPId' }
        });
        return result;
    };
    return KalturaPlayReadyDigitalAudioOPIdHolder;
}(KalturaObjectBase));
export { KalturaPlayReadyDigitalAudioOPIdHolder };
if (false) {
    /** @type {?} */
    KalturaPlayReadyDigitalAudioOPIdHolder.prototype.type;
}
typesMappingStorage['KalturaPlayReadyDigitalAudioOPIdHolder'] = KalturaPlayReadyDigitalAudioOPIdHolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeURpZ2l0YWxBdWRpb09QSWRIb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkSG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQU9sRixJQUFBO0lBQTRELGtFQUFpQjtJQUl6RSxnREFBWSxJQUFrRDtlQUUxRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ2xILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBOUJMO0VBVTRELGlCQUFpQixFQXFCNUUsQ0FBQTtBQXJCRCxrREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5RGlnaXRhbEF1ZGlvT1BJZCB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeURpZ2l0YWxBdWRpb09QSWQnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkSG9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHR5cGU/IDogS2FsdHVyYVBsYXlSZWFkeURpZ2l0YWxBdWRpb09QSWQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkSG9sZGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdHlwZSA6IEthbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5RGlnaXRhbEF1ZGlvT1BJZEhvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5RGlnaXRhbEF1ZGlvT1BJZEhvbGRlcicgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5UmVhZHlEaWdpdGFsQXVkaW9PUElkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5RGlnaXRhbEF1ZGlvT1BJZEhvbGRlciddID0gS2FsdHVyYVBsYXlSZWFkeURpZ2l0YWxBdWRpb09QSWRIb2xkZXI7Il19