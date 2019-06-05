/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
/**
 * @record
 */
export function KalturaWidevineFlavorParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaWidevineFlavorParamsOutputArgs.prototype.widevineDistributionStartDate;
/** @type {?|undefined} */
KalturaWidevineFlavorParamsOutputArgs.prototype.widevineDistributionEndDate;
var KalturaWidevineFlavorParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidevineFlavorParamsOutput, _super);
    function KalturaWidevineFlavorParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidevineFlavorParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineFlavorParamsOutput' },
            widevineDistributionStartDate: { type: 'n' },
            widevineDistributionEndDate: { type: 'n' }
        });
        return result;
    };
    return KalturaWidevineFlavorParamsOutput;
}(KalturaFlavorParamsOutput));
export { KalturaWidevineFlavorParamsOutput };
if (false) {
    /** @type {?} */
    KalturaWidevineFlavorParamsOutput.prototype.widevineDistributionStartDate;
    /** @type {?} */
    KalturaWidevineFlavorParamsOutput.prototype.widevineDistributionEndDate;
}
typesMappingStorage['KalturaWidevineFlavorParamsOutput'] = KalturaWidevineFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2lkZXZpbmVGbGF2b3JQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7QUFRdkcsSUFBQTtJQUF1RCw2REFBeUI7SUFLNUUsMkNBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0Riw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25DLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBaENMO0VBVXVELHlCQUF5QixFQXVCL0UsQ0FBQTtBQXZCRCw2Q0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQsIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2lkZXZpbmVGbGF2b3JQYXJhbXNPdXRwdXRBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzIHtcbiAgICB3aWRldmluZURpc3RyaWJ1dGlvblN0YXJ0RGF0ZT8gOiBudW1iZXI7XG5cdHdpZGV2aW5lRGlzdHJpYnV0aW9uRW5kRGF0ZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXaWRldmluZUZsYXZvclBhcmFtc091dHB1dCBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQge1xuXG4gICAgd2lkZXZpbmVEaXN0cmlidXRpb25TdGFydERhdGUgOiBudW1iZXI7XG5cdHdpZGV2aW5lRGlzdHJpYnV0aW9uRW5kRGF0ZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFXaWRldmluZUZsYXZvclBhcmFtc091dHB1dCcgfSxcblx0XHRcdFx0d2lkZXZpbmVEaXN0cmlidXRpb25TdGFydERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRldmluZUZsYXZvclBhcmFtc091dHB1dCddID0gS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0OyJdfQ==