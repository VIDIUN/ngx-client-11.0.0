/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaWidevineFlavorParamsOutput extends KalturaFlavorParamsOutput {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineFlavorParamsOutput' },
            widevineDistributionStartDate: { type: 'n' },
            widevineDistributionEndDate: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWidevineFlavorParamsOutput.prototype.widevineDistributionStartDate;
    /** @type {?} */
    KalturaWidevineFlavorParamsOutput.prototype.widevineDistributionEndDate;
}
typesMappingStorage['KalturaWidevineFlavorParamsOutput'] = KalturaWidevineFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2lkZXZpbmVGbGF2b3JQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQVF2RyxNQUFNLHdDQUF5QyxTQUFRLHlCQUF5Qjs7OztJQUs1RSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0Riw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25DLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCwgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEFyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXaWRldmluZUZsYXZvclBhcmFtc091dHB1dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEFyZ3Mge1xuICAgIHdpZGV2aW5lRGlzdHJpYnV0aW9uU3RhcnREYXRlPyA6IG51bWJlcjtcblx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0IGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCB7XG5cbiAgICB3aWRldmluZURpc3RyaWJ1dGlvblN0YXJ0RGF0ZSA6IG51bWJlcjtcblx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2lkZXZpbmVGbGF2b3JQYXJhbXNPdXRwdXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0JyB9LFxuXHRcdFx0XHR3aWRldmluZURpc3RyaWJ1dGlvblN0YXJ0RGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3aWRldmluZURpc3RyaWJ1dGlvbkVuZERhdGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVdpZGV2aW5lRmxhdm9yUGFyYW1zT3V0cHV0J10gPSBLYWx0dXJhV2lkZXZpbmVGbGF2b3JQYXJhbXNPdXRwdXQ7Il19