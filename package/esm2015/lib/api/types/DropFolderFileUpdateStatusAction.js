/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFileUpdateStatusActionArgs() { }
/** @type {?} */
DropFolderFileUpdateStatusActionArgs.prototype.dropFolderFileId;
/** @type {?} */
DropFolderFileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export class DropFolderFileUpdateStatusAction extends KalturaRequest {
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
            action: { type: 'c', default: 'updateStatus' },
            dropFolderFileId: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaDropFolderFileStatus, subType: 'KalturaDropFolderFileStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DropFolderFileUpdateStatusAction.prototype.dropFolderFileId;
    /** @type {?} */
    DropFolderFileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZpbGVVcGRhdGVTdGF0dXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJGaWxlVXBkYXRlU3RhdHVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLHVDQUF3QyxTQUFRLGNBQXFDOzs7O0lBS3ZGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUMsQ0FBQztLQUMvSDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDM0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUMxRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRm9sZGVyRmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBkcm9wRm9sZGVyRmlsZUlkIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkcm9wRm9sZGVyRmlsZScgYWN0aW9uICd1cGRhdGVTdGF0dXMnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgc3RhdHVzIG9mIEthbHR1cmFEcm9wRm9sZGVyRmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEcm9wRm9sZGVyRmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJvcEZvbGRlckZpbGVVcGRhdGVTdGF0dXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJvcEZvbGRlckZpbGU+IHtcblxuICAgIGRyb3BGb2xkZXJGaWxlSWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEcm9wRm9sZGVyRmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJvcGZvbGRlcl9kcm9wZm9sZGVyZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZVN0YXR1cycgfSxcblx0XHRcdFx0ZHJvcEZvbGRlckZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=