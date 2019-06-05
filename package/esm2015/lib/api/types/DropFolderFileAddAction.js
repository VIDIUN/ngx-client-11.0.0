/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFileAddActionArgs() { }
/** @type {?} */
DropFolderFileAddActionArgs.prototype.dropFolderFile;
/**
 * Build request payload for service 'dropFolderFile' action 'add'.
 *
 * Usage: Allows you to add a new KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export class DropFolderFileAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDropFolderFile', responseConstructor: KalturaDropFolderFile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolderfile' },
            action: { type: 'c', default: 'add' },
            dropFolderFile: { type: 'o', subTypeConstructor: KalturaDropFolderFile, subType: 'KalturaDropFolderFile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DropFolderFileAddAction.prototype.dropFolderFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJGaWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSw4QkFBK0IsU0FBUSxjQUFxQzs7OztJQUk5RSxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDLENBQUM7S0FDL0g7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzNFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtTQUNyRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRm9sZGVyRmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBkcm9wRm9sZGVyRmlsZSA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Ryb3BGb2xkZXJGaWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGEgbmV3IEthbHR1cmFEcm9wRm9sZGVyRmlsZSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJvcEZvbGRlckZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BGb2xkZXJGaWxlQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURyb3BGb2xkZXJGaWxlPiB7XG5cbiAgICBkcm9wRm9sZGVyRmlsZSA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEcm9wRm9sZGVyRmlsZUFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJvcGZvbGRlcl9kcm9wZm9sZGVyZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0ZHJvcEZvbGRlckZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==