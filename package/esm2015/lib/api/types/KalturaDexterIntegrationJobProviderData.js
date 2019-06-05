/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaDexterIntegrationJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.transcriptAssetId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.voicebaseApiKey;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.voicebaseApiPassword;
export class KalturaDexterIntegrationJobProviderData extends KalturaIntegrationJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaDexterIntegrationJobProviderData' },
            metadataProfileId: { type: 'n' },
            transcriptAssetId: { type: 's' },
            entryId: { type: 's' },
            voicebaseApiKey: { type: 's' },
            voicebaseApiPassword: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.metadataProfileId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.transcriptAssetId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.entryId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.voicebaseApiKey;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.voicebaseApiPassword;
}
typesMappingStorage['KalturaDexterIntegrationJobProviderData'] = KalturaDexterIntegrationJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGV4dGVySW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVcvSCxNQUFNLDhDQUErQyxTQUFRLGlDQUFpQzs7OztJQVExRixZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUNBQXlDLENBQUMsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHRyYW5zY3JpcHRBc3NldElkPyA6IHN0cmluZztcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdHZvaWNlYmFzZUFwaUtleT8gOiBzdHJpbmc7XG5cdHZvaWNlYmFzZUFwaVBhc3N3b3JkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHR0cmFuc2NyaXB0QXNzZXRJZCA6IHN0cmluZztcblx0ZW50cnlJZCA6IHN0cmluZztcblx0dm9pY2ViYXNlQXBpS2V5IDogc3RyaW5nO1xuXHR2b2ljZWJhc2VBcGlQYXNzd29yZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZXh0ZXJJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dHJhbnNjcmlwdEFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2b2ljZWJhc2VBcGlLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dm9pY2ViYXNlQXBpUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhRGV4dGVySW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGE7Il19