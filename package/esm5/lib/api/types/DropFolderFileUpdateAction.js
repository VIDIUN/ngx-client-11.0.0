/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFileUpdateActionArgs() { }
/** @type {?} */
DropFolderFileUpdateActionArgs.prototype.dropFolderFileId;
/** @type {?} */
DropFolderFileUpdateActionArgs.prototype.dropFolderFile;
/**
 * Build request payload for service 'dropFolderFile' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'dropFolderFile' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
DropFolderFileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(DropFolderFileUpdateAction, _super);
    function DropFolderFileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDropFolderFile', responseConstructor: KalturaDropFolderFile }) || this;
    }
    /**
     * @return {?}
     */
    DropFolderFileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolderfile' },
            action: { type: 'c', default: 'update' },
            dropFolderFileId: { type: 'n' },
            dropFolderFile: { type: 'o', subTypeConstructor: KalturaDropFolderFile, subType: 'KalturaDropFolderFile' }
        });
        return result;
    };
    return DropFolderFileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'dropFolderFile' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export { DropFolderFileUpdateAction };
if (false) {
    /** @type {?} */
    DropFolderFileUpdateAction.prototype.dropFolderFileId;
    /** @type {?} */
    DropFolderFileUpdateAction.prototype.dropFolderFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJGaWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQXFDO0lBS2pGLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBMUNMO0VBbUJnRCxjQUFjLEVBd0I3RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsc0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEZvbGRlckZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZHJvcEZvbGRlckZpbGVJZCA6IG51bWJlcjtcblx0ZHJvcEZvbGRlckZpbGUgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkcm9wRm9sZGVyRmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYW4gZXhpc3RpbmcgS2FsdHVyYURyb3BGb2xkZXJGaWxlIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEcm9wRm9sZGVyRmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJvcEZvbGRlckZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJvcEZvbGRlckZpbGU+IHtcblxuICAgIGRyb3BGb2xkZXJGaWxlSWQgOiBudW1iZXI7XG5cdGRyb3BGb2xkZXJGaWxlIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERyb3BGb2xkZXJGaWxlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkcm9wZm9sZGVyX2Ryb3Bmb2xkZXJmaWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVyRmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJGaWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=