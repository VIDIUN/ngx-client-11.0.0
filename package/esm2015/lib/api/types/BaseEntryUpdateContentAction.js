/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryUpdateContentActionArgs() { }
/** @type {?} */
BaseEntryUpdateContentActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryUpdateContentActionArgs.prototype.resource;
/** @type {?|undefined} */
BaseEntryUpdateContentActionArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
BaseEntryUpdateContentActionArgs.prototype.advancedOptions;
/**
 * Build request payload for service 'baseEntry' action 'updateContent'.
 *
 * Usage: Update the content resource associated with the entry
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryUpdateContentAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'updateContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaResource, subType: 'KalturaResource' },
            conversionProfileId: { type: 'n' },
            advancedOptions: { type: 'o', subTypeConstructor: KalturaEntryReplacementOptions, subType: 'KalturaEntryReplacementOptions' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BaseEntryUpdateContentAction.prototype.entryId;
    /** @type {?} */
    BaseEntryUpdateContentAction.prototype.resource;
    /** @type {?} */
    BaseEntryUpdateContentAction.prototype.conversionProfileId;
    /** @type {?} */
    BaseEntryUpdateContentAction.prototype.advancedOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5VXBkYXRlQ29udGVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmFzZUVudHJ5VXBkYXRlQ29udGVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUFnQzs7OztJQU85RSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDLENBQUM7S0FDckg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDNUYsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhUmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUVudHJ5VXBkYXRlQ29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFSZXNvdXJjZTtcblx0Y29udmVyc2lvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGFkdmFuY2VkT3B0aW9ucz8gOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAndXBkYXRlQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSB0aGUgY29udGVudCByZXNvdXJjZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJhc2VFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmFzZUVudHJ5VXBkYXRlQ29udGVudEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlc291cmNlIDogS2FsdHVyYVJlc291cmNlO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRhZHZhbmNlZE9wdGlvbnMgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQmFzZUVudHJ5VXBkYXRlQ29udGVudEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiYXNlZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVDb250ZW50JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc291cmNlJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFkdmFuY2VkT3B0aW9ucyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19