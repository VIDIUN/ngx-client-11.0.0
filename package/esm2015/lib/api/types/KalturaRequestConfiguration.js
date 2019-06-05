/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaRequestConfigurationArgs() { }
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.ks;
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.responseProfile;
export class KalturaRequestConfiguration extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaRequestConfiguration' },
            partnerId: { type: 'n' },
            ks: { type: 's' },
            responseProfile: { type: 'o', subTypeConstructor: KalturaBaseResponseProfile, subType: 'KalturaBaseResponseProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaRequestConfiguration.prototype.partnerId;
    /** @type {?} */
    KalturaRequestConfiguration.prototype.ks;
    /** @type {?} */
    KalturaRequestConfiguration.prototype.responseProfile;
}
typesMappingStorage['KalturaRequestConfiguration'] = KalturaRequestConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sa0NBQW1DLFNBQVEsaUJBQWlCOzs7O0lBTTlELFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0a3M/IDogc3RyaW5nO1xuXHRyZXNwb25zZVByb2ZpbGU/IDogS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZXF1ZXN0Q29uZmlndXJhdGlvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHBhcnRuZXJJZCA6IG51bWJlcjtcblx0a3MgOiBzdHJpbmc7XG5cdHJlc3BvbnNlUHJvZmlsZSA6IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0a3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzcG9uc2VQcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uJ10gPSBLYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb247Il19