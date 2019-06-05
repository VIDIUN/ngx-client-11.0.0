/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaylistMatchAttribute } from './KalturaPlaylistMatchAttribute';
import { KalturaSearchMatchAttributeCondition } from './KalturaSearchMatchAttributeCondition';
/**
 * @record
 */
export function KalturaPlaylistMatchAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaPlaylistMatchAttributeConditionArgs.prototype.attribute;
var KalturaPlaylistMatchAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaylistMatchAttributeCondition, _super);
    function KalturaPlaylistMatchAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlaylistMatchAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaylistMatchAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaPlaylistMatchAttribute, subType: 'KalturaPlaylistMatchAttribute' }
        });
        return result;
    };
    return KalturaPlaylistMatchAttributeCondition;
}(KalturaSearchMatchAttributeCondition));
export { KalturaPlaylistMatchAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaPlaylistMatchAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaPlaylistMatchAttributeCondition'] = KalturaPlaylistMatchAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlsaXN0TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5bGlzdE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBNEMsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7OztBQU94SSxJQUFBO0lBQTRELGtFQUFvQztJQUk1RixnREFBWSxJQUFrRDtlQUUxRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQ2pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBOUJMO0VBVTRELG9DQUFvQyxFQXFCL0YsQ0FBQTtBQXJCRCxrREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWxpc3RNYXRjaEF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYVBsYXlsaXN0TWF0Y2hBdHRyaWJ1dGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uLCBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5bGlzdE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb25BcmdzIHtcbiAgICBhdHRyaWJ1dGU/IDogS2FsdHVyYVBsYXlsaXN0TWF0Y2hBdHRyaWJ1dGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5bGlzdE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uIHtcblxuICAgIGF0dHJpYnV0ZSA6IEthbHR1cmFQbGF5bGlzdE1hdGNoQXR0cmlidXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheWxpc3RNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWxpc3RNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0YXR0cmlidXRlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlsaXN0TWF0Y2hBdHRyaWJ1dGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlsaXN0TWF0Y2hBdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5bGlzdE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uJ10gPSBLYWx0dXJhUGxheWxpc3RNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbjsiXX0=