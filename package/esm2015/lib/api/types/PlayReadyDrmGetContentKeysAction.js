/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGetContentKeysActionArgs() { }
/** @type {?} */
PlayReadyDrmGetContentKeysActionArgs.prototype.keyIds;
/**
 * Build request payload for service 'playReadyDrm' action 'getContentKeys'.
 *
 * Usage: Get content keys for input key ids
 *
 * Server response type:         KalturaPlayReadyContentKey[]
 * Server failure response type: KalturaAPIException
 */
export class PlayReadyDrmGetContentKeysAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'a', responseSubType: 'KalturaPlayReadyContentKey', responseConstructor: KalturaPlayReadyContentKey });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'getContentKeys' },
            keyIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    PlayReadyDrmGetContentKeysAction.prototype.keyIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2V0Q29udGVudEtleXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlSZWFkeURybUdldENvbnRlbnRLZXlzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSx1Q0FBd0MsU0FBUSxjQUE0Qzs7OztJQUk5RixZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRywwQkFBMEIsRUFBRyxDQUFDLENBQUM7S0FDekk7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ25ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXkgfSBmcm9tICcuL0thbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheVJlYWR5RHJtR2V0Q29udGVudEtleXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAga2V5SWRzIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGxheVJlYWR5RHJtJyBhY3Rpb24gJ2dldENvbnRlbnRLZXlzJy5cbiAqXG4gKiBVc2FnZTogR2V0IGNvbnRlbnQga2V5cyBmb3IgaW5wdXQga2V5IGlkc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5W11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXlSZWFkeURybUdldENvbnRlbnRLZXlzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXlbXT4ge1xuXG4gICAga2V5SWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFBsYXlSZWFkeURybUdldENvbnRlbnRLZXlzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGxheXJlYWR5X3BsYXlyZWFkeWRybScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldENvbnRlbnRLZXlzJyB9LFxuXHRcdFx0XHRrZXlJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19