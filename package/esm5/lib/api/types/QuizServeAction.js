/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function QuizServeActionArgs() { }
/** @type {?} */
QuizServeActionArgs.prototype.entryId;
/** @type {?} */
QuizServeActionArgs.prototype.quizOutputType;
/**
 * Build request payload for service 'quiz' action 'serve'.
 *
 * Usage: creates a pdf from quiz object
 * The Output type defines the file format in which the quiz will be generated
 * Currently only PDF files are supported
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'quiz' action 'serve'.
 *
 * Usage: creates a pdf from quiz object
 * The Output type defines the file format in which the quiz will be generated
 * Currently only PDF files are supported
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
QuizServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(QuizServeAction, _super);
    function QuizServeAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    QuizServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'quiz_quiz' },
            action: { type: 'c', default: 'serve' },
            entryId: { type: 's' },
            quizOutputType: { type: 'en', subTypeConstructor: KalturaQuizOutputType, subType: 'KalturaQuizOutputType' }
        });
        return result;
    };
    return QuizServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'quiz' action 'serve'.
 *
 * Usage: creates a pdf from quiz object
 * The Output type defines the file format in which the quiz will be generated
 * Currently only PDF files are supported
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { QuizServeAction };
if (false) {
    /** @type {?} */
    QuizServeAction.prototype.entryId;
    /** @type {?} */
    QuizServeAction.prototype.quizOutputType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpelNlcnZlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9RdWl6U2VydmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJGOzs7Ozs7Ozs7O0FBQUE7SUFBcUMsMkNBQWtCO0lBS25ELHlCQUFZLElBQTBCO2VBRWxDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ3RHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MEJBN0NMO0VBc0JxQyxrQkFBa0IsRUF3QnRELENBQUE7Ozs7Ozs7Ozs7O0FBeEJELDJCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVF1aXpPdXRwdXRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUXVpek91dHB1dFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1aXpTZXJ2ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cXVpek91dHB1dFR5cGUgOiBLYWx0dXJhUXVpek91dHB1dFR5cGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdxdWl6JyBhY3Rpb24gJ3NlcnZlJy5cbiAqXG4gKiBVc2FnZTogY3JlYXRlcyBhIHBkZiBmcm9tIHF1aXogb2JqZWN0XG4gKiBUaGUgT3V0cHV0IHR5cGUgZGVmaW5lcyB0aGUgZmlsZSBmb3JtYXQgaW4gd2hpY2ggdGhlIHF1aXogd2lsbCBiZSBnZW5lcmF0ZWRcbiAqIEN1cnJlbnRseSBvbmx5IFBERiBmaWxlcyBhcmUgc3VwcG9ydGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWl6U2VydmVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cXVpek91dHB1dFR5cGUgOiBLYWx0dXJhUXVpek91dHB1dFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUXVpelNlcnZlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3F1aXpfcXVpeicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1aXpPdXRwdXRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVF1aXpPdXRwdXRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFRdWl6T3V0cHV0VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19